import * as React from 'react';
import {GithubRepo} from '../api/github';

import './Repo.scss';

export const Repo = (props: GithubRepo) => {
    return (
        <div className='repo' key={props.html_url}>
            <a href={props.html_url}><h2>{props.name}</h2></a>
            <span>{props.updated_at}</span>
        </div>
    )
}
