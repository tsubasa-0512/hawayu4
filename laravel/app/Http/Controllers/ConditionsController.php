<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Condition;

class ConditionsController extends Controller
{
    //ユーザーのcondition情報保存
    public function postCondition(Request $request, Condition $condition) {
        $user_id =  $request->user()->id;
        
        
        $condition->condition = $request->condition;
        $condition->symptom = $request->symptom;
        $condition->period = $request->period;
        $condition->hospital = $request->hospital;
        $condition->prescribed = $request->prescribed;
        $condition->comment = $request->comment;
        $condition->recovered = $request->recovered;
        $condition->user_id = $user_id;
        $condition->save();
        
        return $condition;
    }

    // 該当ユーザーのcondition情報表示
    public function getConditions(Request $request, Condition $condition) {
        $user_id =  $request->user()->id;
        $conditions = Condition::where('user_id', $user_id)->get();

        return $conditions;
    }

    // 該当condition情報の編集
    public function updateCondition(Request $request, Condition $condition) {
        $data = $request->all();

        $condition = Condition::where('id', $request->id)->first();
        $condition->save($data);

        return $condition;
    }
}
