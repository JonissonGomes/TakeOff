import React from 'react'

import { SocialMedia } from './styles';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Social() {
    return (
        <SocialMedia>
            <Link to="/">
                <Icon icon="entypo-social:instagram" fontSize={30} color="000000" />
            </Link>

            <Link to="/">
                <Icon icon="akar-icons:whatsapp-fill" fontSize={30} color="000000" />
            </Link>

            <Link to="/">
                <Icon icon="entypo-social:instagram" fontSize={30} color="000000" />
            </Link>

        </SocialMedia>
    )
}
