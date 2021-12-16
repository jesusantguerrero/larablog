<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    // List all comments for the post
    function index() {
        return Comment::where('level', 0)
            ->with(['replies', 'replies.replies'])
            ->get();
    }
    /**
     * Store a newly created comment in storage
     */
    function store(Request $request) {
        $postData = $request->post();
        $comment = Comment::create($postData);
        return $comment;
    }
}
