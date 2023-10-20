import { useEffect, useState } from 'react';

import axios from 'axios';
import { v4 as uuid } from 'uuid';
import Container from '../components/Container';
import { Grid } from '../components/Grid';

import classes from './Repositories.module.scss';

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
}

export default function Repositories() {
  const [repoList, setRepoList] = useState<Repo[]>([]);
  const [ghConfig, setGHConfig] = useState<GHConfig | null>(null);

  const baseURL = 'https://github.com';

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
      if (ghConfig?.username && ghConfig?.PAT) {
        const { username, PAT } = ghConfig;
        const url = `https://api.github.com/users/${username}/repos`;

        const headers = {
          Authorization: `token ${PAT}`,
        };

        try {
          const response = await axios.get(url, { headers });
          const sortedData = response.data.sort(
            (a: Repo, b: Repo) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );
          setRepoList(sortedData);
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

  return (
    <Container>
      <Grid>
        {repoList.map((repo) => (
          <Grid.Element bordered background key={uuid()}>
            <summary>
              <p className={classes['repo-text']}>Repository: {repo.name}</p>
              <p className={classes['repo-text']}>
                Created at: {reformatDate(repo.pushed_at)}
              </p>
              <p className={classes['repo-text']}>
                Updated at: {reformatDate(repo.updated_at)}
              </p>
              <a
                href={`${baseURL}/${ghConfig?.username}/${repo.name}`}
                className={classes['repo-link']}
                target='_blank'
              >
                Go to repository
              </a>
            </summary>
          </Grid.Element>
        ))}
      </Grid>
    </Container>
  );
}
