import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/client';

import styles from './styles.module.scss';

export function SignInButton() {
    const [session] = useSession();

    return (
        <button 
            type="button"
            className={styles.signInButton}
            onClick={() => session ? signOut() : signIn('github')}
        >
            <FaGithub color={session ? "#04d361" : "#eba417"} />
            {session ? session.user.name : "Sign in with GitHub"}
            {session && <FiX color="#737380" className={styles.closeIcon} />}
        </button>
    );
}