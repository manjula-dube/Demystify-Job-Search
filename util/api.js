 

 export default function getJobDetails() {
    return fetch('https://jobs.github.com/positions.json?description=python')
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }