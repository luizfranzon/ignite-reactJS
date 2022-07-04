import { Post } from "./Post"

export function App() {

    return (
        <div>
            <Post
                author="Luiz"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <Post
                author="Carlos"
                content="Melhor post do mundo "
            />
        </div>
    )
}
