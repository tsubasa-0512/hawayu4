<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function userRegister() {
        return redirect(route('user.register'));
    }
    
    public function operatorRegister() {
        return redirect(route('operator.register'));
    }

    public function userLogin() {
        return redirect(route('user.login'));
    }

    public function operatorLogin() {
        return redirect(route('operator.login'));
    }
}
