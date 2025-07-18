<?php

namespace App\Enums;

enum UserState: string
{
    case SELECTING = 'selecting';
    case REGISTERING = 'registering';
    case WAITING_FOR_CONFIRMATION = 'waiting_for_confirmation';

    case ACTIVE = 'active';
}
