import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = false;

    return (
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color={isUserLoggedIn ? "#04d361" : "#eba417"} />
            {isUserLoggedIn ? "Guilhermo González" : "Sign in with GitHub"}
            {isUserLoggedIn && <FiX color="#737380" className={styles.closeIcon} />}
        </button>

    );
}