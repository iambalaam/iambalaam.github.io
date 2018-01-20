import * as React from 'react';

const githubLogo = require('./assets/github.png')
import './Nav.scss'

interface NavProps {
    updateUsername: (name: string) => void
}

export default class Nav extends React.Component<NavProps, {}> {
    render() {
        return (
            <nav>
                <img id='githubLogo' src={githubLogo} alt='github'/>
                <form>
                    <input
                        id='username'
                        type='text' name='user'
                        defaultValue='iambalaam'
                        onChange={(e) => this.props.updateUsername(e.target.value)}/>
                </form>
            </nav>
        )
    }
}

