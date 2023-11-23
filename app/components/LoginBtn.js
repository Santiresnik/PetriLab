import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
const { data: session } = useSession()
if (session) {
    return (
    <>
        Currently signed in as {session.user.email} <br />
        <button onClick={() => signOut()}></button>
    </>
    )
}
return (
    <>
    <button onClick={() => signIn()} className="w-full px-4 py-2 flex items-center justify-center text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none">
                Sign In with Google
    </button>
    </>
)
}