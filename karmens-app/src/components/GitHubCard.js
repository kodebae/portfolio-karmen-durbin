import React from 'react';
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const GitHubCard = () => {

    const [avatarURL, setAvatarURL] = useState();
    const [githubUsername, setGitHubUsername] = useState();
    const [repoData, setRepoData] = useState();

    async function repoDataURL() {
        //Get repo data about github user
        await fetch("https://api.github.com/users/kodebae/repos")
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              const list = result.map((item) => (
                <div className="text-center">
                    <a className="anchor-text" target="_blank" href={item.svn_url}>
                    {item.name}
                    </a>
                </div>
              ));
              setRepoData(list);
            },
            (error) => {
              console.log(error);
            }
          );
      }
    
      useEffect(() => {
        fetch("https://api.github.com/users/kodebae")
          .then((res) => res.json())
          .then(
            (result) => {
              console.log(result);
              setAvatarURL(result.avatar_url);
              setGitHubUsername(result.login);
            },
            (error) => {
              console.log(error);
            }
          );
      }, []);

    return (
        <div>
           <div className="gh-card">
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={avatarURL} />
                <Card.Body>
                <Card.Title>{githubUsername}</Card.Title>
                <Button variant="primary" onClick={repoDataURL}>
                    List my public repos!
                </Button>
                </Card.Body>
            </Card>
            {repoData}
    </div>
        </div>
    );

   
}

/**
 * TODO: Add followers, and location to GitHub card.
*/

