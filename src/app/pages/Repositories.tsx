import { useEffect, useState } from 'react';

import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Container from '../components/UI/Container';
import { Grid } from '../components/UI/Grid';
import classes from './Repositories.module.scss';
import NavigateLink from '../components/UI/NavigateLink';

interface GHConfig {
  username: string;
  PAT: string;
}

interface Repo {
  name: string;
  html_url: string;
  description: string;
  created_at: Date;
  pushed_at: Date;
  updated_at: Date;
  language: string;
}

export default function Repositories() {
  const [repoList, setRepoList] = useState<Repo[]>([]);
  const [ghConfig, setGHConfig] = useState<GHConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch('src/navigation.link.json');
        const data = await response.json();
        setGHConfig(data['gh-repo']);
      } catch (error) {
        console.error(error);
      }
    };
    fetchToken();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (ghConfig?.username) {
        const { username } = ghConfig;
        const url = `https://api.github.com/users/${username}/repos`;

        try {
          const response = await axios.get(url);
          const sortedData = response.data.sort(
            (a: Repo, b: Repo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );
          setTimeout(() => {
            setRepoList(sortedData);
            setLoading(false);
          }, 500);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [ghConfig]);

  const reformatDate = (date: Date) => {
    const getDate = String(date).split('T')[0];
    const reformatDate = getDate.split('-');
    return `${reformatDate[2]}-${reformatDate[1]}-${reformatDate[0]}`;
  };

  const setLanguage = (language: string) =>
    language ?? 'Unknown';

  return (
    <Container>
      {loading ? (
        <p className={classes.loading}>Loading...</p>
      ) : (
        <Grid>
          {repoList.map((repo) => (
            <Grid.Element bordered background key={uuid()}>
              <summary>
                <p className={classes['repo-text']}>Repository: {repo.name}</p>
                <p>Language: {setLanguage(repo.language)}</p>
                <p className={classes['repo-text']}>
                  Created at: {reformatDate(repo.pushed_at)}
                </p>
                <p className={classes['repo-text']}>
                  Updated at: {reformatDate(repo.updated_at)}
                </p>
                <NavigateLink
                  linkTo={repo.html_url}
                  target
                  content='Go to repository'
                  background
                />
              </summary>
            </Grid.Element>
          ))}
        </Grid>
      )}
    </Container>
  );
}
