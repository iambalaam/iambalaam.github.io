import * as React from 'react';
import * as reactDOM from 'react-dom';
import './index.scss';
import Nav from './ui/Nav';
import {Repo} from './ui/Repo';
import GithubClient, {GithubRepo} from './api/github';

interface AppState {
    username: string,
    repos: Array<GithubRepo>
}

const github = new GithubClient();

class App extends React.Component<{},AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: 'iambalaam',
            repos: []
        }
        this.updateRepos('iambalaam');
    }

    async updateRepos(username: string) {
        const repos = await github.getRepos(username);
        this.setState({username, repos});
    }

    render() {
        return (
            <div>
                <Nav updateUsername={(name) => {this.updateRepos(name)}}/>
                {
                    this.state.repos
                        .sort((a,b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                        .map((r) => Repo(r))

                    }
            </div>
        )
    }
}

reactDOM.render(
    <App/>,
    document.getElementById('app')
)
