<?php

namespace App\Http\Controllers\Operator\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\Models\Operator;
use Illuminate\Database\Eloquent\DB;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = RouteServiceProvider::OPERATOR_HOME;

    protected function authenticated(Request $request)
    {
      $token = Str::random(80);

      $email = $request->input('email');
      $operator = Operator::where('email', $email)->first();
      
      $operator->api_token = $token;
      $operator->save();

      session()->put('role', 'operator');        
      session()->put('api_token', $token);
    }

    public function __construct()
    {
        $this->middleware('guest:operator')->except('logout');
    }

    protected function guard()
    {
        return Auth::guard('operator');
    }

    public function showLoginForm()
    {
        return view('operator.auth.login');
    }

    public function logout(Request $request)
    {        
        Auth::guard('operator')->logout();

        session()->put('role', '');        
        session()->put('api_token', '');

        return $this->loggedOut($request);
    }

    public function loggedOut(Request $request)
    {
        return redirect(route('operator.login'));
    }
}