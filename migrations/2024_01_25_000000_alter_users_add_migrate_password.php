<?php

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'mybb_old_password' => ['text', 'nullable' => true]
]);
