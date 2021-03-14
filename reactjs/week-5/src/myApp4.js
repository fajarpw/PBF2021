import React from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";

// Pada aplikasi ini memiliki 3 halaman: public page, private page, dan halaman login
// Unutk masuk ke private page anda harus login terlebih dahulu

// Pertama, klik public page, kemdian kunjungi private page,
// Karena anda belum login, maka user diarahkan ke halaman login
// Setelah login, user akan diarahkan kembali ke private page

// Perhatikan perubahan setiap URL. Jika user mngklik tombol kembali
// apakah user kembali ke halaman login? tidak, karena user sudah login
// cobalah, maka user akan kembali ke halaman yang user kungjungi sebelum login, yaitu public

export default function AuthExample() {
    return (
        <Router>
            <div>
                <Switch>
                    <AuthButton />
                </Switch>
                <ul>
                    <li>
                        <Link to="/public">Public Page</Link>
                    </li>
                    <li>
                        <Link to="/private">Private Page</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/public">
                        <PublicPage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                    </Route>
                    <PrivateRoute path="/private">
                        <ProtectedPage />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

const fakeAuth = {
    isAuthencticated: false,
    authenticated(cb) {
        fakeAuth.isAuthencticated = true;
        setTimeout(cb, 100);
    },
    signout(cb) {
        fakeAuth.isAuthencticated = false;
        setTimeout(cb, 100);
    }
};

function AuthButton() {
    let history = useHistory();

    return fakeAuth.isAuthencticated ? (
        <p>
            Welcome!{" "}
            <button
                onClick={() => {
                    fakeAuth.signout(() => history.push("/"));
                }}>Sign Out</button>
        </p>
    ) : (
        <p>
            You are not logged in.
        </p>
    );
}

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

function PublicPage() {
    return <h3>Public Page</h3>
}

function ProtectedPage() {
    return <h3>Private Page</h3>
}

function LoginPage() {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    let login = () => {
        fakeAuth.authenticated(() => {
            history.replace(from);
        });
    };
    return (
        <div>
            <p>You must log in to view the page at {from.pathname}</p>
            <button onClick={login}>Log In</button>
        </div>
    );
}