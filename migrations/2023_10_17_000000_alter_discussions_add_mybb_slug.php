<?php

use Flarum\Database\Migration;

return Migration::addColumns('discussions', [
    'mybb_slug' => ['text', 'nullable' => true]
]);
