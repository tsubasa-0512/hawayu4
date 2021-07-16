@extends('layouts.user.app')

@section('content')
<div class="container mx-auto">
    <span>産業師・保健師の方は<a href="{{ route('operator.login') }}">こちら</a></span>
    <div class="card px-0" style="width: 100%">
        <div class="card-body px-0">
            <div class="font-weight-bold text-center border-bottom pb-3" style="font-size: 24px">ログイン</div>

            <form method="POST" action="{{ route('user.login') }}" class="p-5">
                @csrf

                <div class="form-group">
                    <label for="email">メールアドレス</label>
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="password">パスワード</label>
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">

                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>

                        <label class="form-check-label" for="remember">
                            ログイン状態を保存する
                        </label>
                    </div>
                </div>

                <div class="form-group mb-0">
                    <button type="submit" class="btn btn-block" style="background-color:#FFE3D3;">
                        ログイン
                    </button>
                </div>

                <div class="mt-3">
                    アカウントをお持ちでない方は<a href="{{ route('user.register') }}">こちら</a>
                </div>
                <div class="mt-1">
                    パスワードをお忘れの方は<a href="#">こちら</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection