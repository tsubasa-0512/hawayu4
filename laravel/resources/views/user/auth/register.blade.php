@extends('layouts.user.app')

@section('content')
<div class="container">
    <div class="card" style="width: 500px">
        <div class="card-body">
            <div class="font-weight-bold text-center border-bottom pb-3" style="font-size: 24px">会員情報登録</div>

            <form method="POST" action="{{ route('user.register') }}" class="p-5">
                @csrf

                <div class="form-group">
                    <label for="name">氏名</label>
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror" name="name" value="{{ old('name') }}" required autocomplete="name" autofocus placeholder="name">
                    @error('name')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="email">メールアドレス</label>
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" placeholder="email">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>
                
                <div class="form-group">
                    <label for="code">企業コード</label>
                    <input id="code" type="text" class="form-control @error('code') is-invalid @enderror" name="code" placeholder="code">
                    @error('email')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="password">パスワード</label>
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="new-password" placeholder="password">
                    @error('password')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="password">パスワード（確認）</label>
                    <input id="password" type="password-confirm" class="form-control" name="password_confirmation" required autocomplete="new-password" placeholder="password">
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-block btn-warning">
                        会員登録
                    </button>
                </div>

                <div>
                    アカウントをお持ちの方は<a href="{{ route('user.login') }}">こちら</a>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
    