<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'post_id',
        'comment_id',
        'level',
        'user_name',
        'text',
    ];

    public function replies()
    {
        return $this->hasMany(Comment::class, 'comment_id');
    }
}
