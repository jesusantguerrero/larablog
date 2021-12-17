<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    // List all comments for the post
    function index(Request $request) {
        $order = $request->query('order', 'desc');
        return Comment::where('level', 0)
            ->with(['replies', 'replies.replies'])
            ->orderBy('created_at', $order)
            ->get();
    }
    /**
     * Store a newly created comment in storage
     */
    function store(Request $request) {
        $maxLevel = Comment::MAX_LEVEL;
        $postData = $request->post();
        if ($postData['level'] <= $maxLevel) {
            $comment = Comment::create($postData);
            return $comment;
        }
        return response()->json([
            'error' => "Comment level must be equal or less than {$maxLevel}"], 400);
    }
}
