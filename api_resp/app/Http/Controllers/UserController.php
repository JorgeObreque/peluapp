<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;


class UserController extends Controller
{
    function store(Request $request){

        $request->validate([
            'name' => 'required|max:50|min:3',
            'email' => 'required|email|unique:users|max:30',
            'password' => 'required|min:6|max:15|confirmed',
            'password_confirmation' => 'required'
        ]);

        try{

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);  
        $user->sendEmailVerificationNotification();   
        $user->save();          
        return response()->json(['message' => 'Usuario Creado Correctamente','email'=>$user->email], 201);
        }
        catch(\Exception $e){
            
            return response()->json(['api_catching_error' => $e->getMessage()], 500); 
            
        }
        
    }
    

}
