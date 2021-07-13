<?php

namespace App\Http\Controllers\Operator\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;
use App\Models\Operator;
use Illuminate\Support\Str;

class RegisterController extends Controller
{
    use RegistersUsers;

    protected $redirectTo = RouteServiceProvider::OPERATOR_HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:operator');
    }

    protected function guard()
    {
        return Auth::guard('operator');
    }

    public function showRegistrationForm()
    {
        return view('operator.auth.register');
    }

    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name'     => ['required', 'string', 'max:255'],
            'nickname'     => ['required', 'string', 'max:255'],
            'gender'     => ['required', 'string'],
            'birthday'     => ['required', 'date'],
            'email'    => ['required', 'string', 'email', 'max:255', 'unique:operators'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    protected function create(array $data)
    {
        $token = str_random(80);
        
        session()->put('api_token', $token);
        session()->put('role', 'operator');
        
        return Operator::create([
            'name'     => $data['name'],
            'nickname'     => $data['nickname'],
            'gender' => $data['gender'],
            'birthday' => $data['birthday'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
            'api_token' => $token,
        ]);
    }
}