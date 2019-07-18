<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class masterController extends Controller
{
    public function mainPageFront()
    {
        return view('Landing');
    }
    public function mainPageBack()
    {
        return view('backLading.index');
    }
    public function learnPage()
    {
        return view('backLading.learn');
    }
}
