import React from 'react'

import { SocialMedia } from './styles';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

export default function Social() {
    return (
        <SocialMedia>
            <Link to="/">
                <Icon icon="entypo-social:instagram" fontSize={26} color="#6D747A" />
            </Link>

            <Link to="/">
                <Icon icon="ant-design:youtube-filled" fontSize={36} color="#6D747A" />
            </Link>

            <Link to="/">
                <Icon icon="akar-icons:whatsapp-fill" fontSize={26} color="#6D747A" />
            </Link>

        </SocialMedia>
    )
}
