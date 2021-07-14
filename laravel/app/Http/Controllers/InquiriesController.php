<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inquiry;
use App\Models\Question;
use App\Models\Answer;

class InquiriesController extends Controller
{
    // アンケート用紙作成
    public function createInquiry(Request $request, Inquiry $inquiry) {
        $user = $request->user();

        $inquiry->user_id = $user->id;
        $inquiry->save();

        return $inquiry;
    }

    // 設問・回答表示
    public function showQuestionList() {
        $questions = Question::with('answers')->get();
        
        return $questions;
    }
}
