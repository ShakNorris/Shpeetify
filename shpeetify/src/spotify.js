const CLIENT_ID = "7484ae23375a49b48611e698de9d94be"
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const REDIRECT_URI = "http://localhost:3000"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]

export const getTokenFromUrl = () =>{ //returns an token from url
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item) => { //splits url and gets token part[0] is "accessToken = "and part[1] is the token
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {})
}

export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}
&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
