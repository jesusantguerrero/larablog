<?php

namespace Tests\Feature;

use App\Models\Comment;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommentTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_should_list_comments()
    {
        $response = $this->get('/api/comments');

        $response->assertStatus(200);
    }

    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_should_create_comment()
    {
        $nestedComments = Comment::MAX_LEVEL;
        $latestComment = null;
        for ($i=0; $i <= $nestedComments; $i++) {
            $response = $this->post('/api/comments', [
                'comment_id' => $latestComment ? $latestComment['id'] : null,
                'level' => $i,
                'user_name' => 'John Doe',
                'text' => "This is a comment level $i",
            ]);
            $latestComment = $response->json();
        }

        $response = $this->get('/api/comments');
        $response->assertStatus(200);
        $response->assertJsonCount(1);
        $response->assertJsonFragment([
            'text' => "This is a comment level $nestedComments",
        ]);
    }
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_should_not_allow_above_level_comment()
    {
        $maxLevel = Comment::MAX_LEVEL;
        $level = $maxLevel + 1;
        $response = $this->post('/api/comments', [
            'comment_id' => $maxLevel,
            'level' => $level,
            'user_name' => 'John Doe',
            'text' => "This is a comment level $level",
        ]);

        $response->assertStatus(400);
        $response->assertJsonCount(1);
        $response->assertJsonFragment([
            'error' => "Comment level must be equal or less than $maxLevel",
        ]);
    }
}
