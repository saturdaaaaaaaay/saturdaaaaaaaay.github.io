export default async function Page() {
    return (
        <main className="flex flex-col items-center justify-between mx-1">
            <h1>Video Games</h1>
            <p>These video games were created with Godot and hosted on itch.io</p>
            <div>
                <h2>Pronoun ID Machine</h2>
                <p>Create an ID badge by creating a character in your likeness</p>
                <p>and add your name/pronouns.</p>
                <a href="https://github.com/saturdaaaaaaaay/Pronoun-ID-Machine" target="_blank" className="text-[24px] underline">
                    GitHub Repo
                </a>
                <iframe 
                    src="https://itch.io/embed/2929977?border_width=5&amp;bg_color=D9D9D9&amp;fg_color=585858" 
                    width="552" 
                    height="167"
                    className="rounded-2xl"
                >
                    <a href="https://saturdaaaaaaaay.itch.io/pronoun-id-machine">
                        Pronoun ID Machine by saturdaaaaaaaay
                    </a>
                </iframe>
            </div>
            <div>
                <h2>Tic-Tac-Toe</h2>
                <p>Play a simple game of tic-tac-toe with a friend.</p>
                <a href="https://github.com/saturdaaaaaaaay/tic-tac-toe" target="_blank" className="text-[24px] underline">
                    GitHub Repo
                </a>
                <iframe 
                    src="https://itch.io/embed/3279998?border_width=5&amp;bg_color=D9D9D9&amp;fg_color=585858" 
                    width="560" 
                    height="175"
                    className="rounded-2xl"
                >
                    <a href="https://saturdaaaaaaaay.itch.io/tic-tac-toe">
                        Tic-Tac-Toe by saturdaaaaaaaay
                    </a>
                </iframe>
            </div>
            <div>
                <h2>Make a Cherry Pie</h2>
                <p>Drag and click the ingredients in order to make a cherry pie.</p>
                <iframe 
                    src="https://itch.io/embed/2608808??border_width=5&amp;bg_color=D9D9D9&amp;fg_color=585858" 
                    width="552" 
                    height="167"
                    className="rounded-2xl"
                >
                    <a href="https://saturdaaaaaaaay.itch.io/make-a-cherry-pie">
                        Make a Cherry Pie by saturdaaaaaaaay
                    </a>
                </iframe>
            </div>
        </main>
    );
}