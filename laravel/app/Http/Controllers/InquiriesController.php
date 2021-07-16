<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Inquiry;
use App\Models\Question;
use App\Models\Answer;
use App\Models\Result;

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
    
    // アンケート回答・保存
    public function answerInquiry(Request $request, Result $result) {
        $score = 0;
        $answers = $request->input('answer');
        $inquiry_id = $request->input('inquiry_id');

        $str = [];
        foreach ($answers as $key => $value){
            $val = json_decode($value);
            $answerinfo = Answer::find($val);
            $result->create([
                'inquiry_id' => $inquiry_id,
                'question_id' => $answerinfo->question_id,
                'answer_id' => $answerinfo->id
            ]);

            $score += $answerinfo->allocation;
        }

        $inquiry = Inquiry::where('id', $inquiry_id)->first();
        $inquiry->score = $score;
        $inquiry->save();
        

        return $inquiry;

    }

    public function pastInquiry(Request $request) {
        $user_id =  $request->user()->id;
        $past_inquiry = Inquiry::with('results')->where('user_id', $user_id)->get();
        return $past_inquiry;
    }
}   
