import styles from "./PageNotFound.module.scss"

export const PageNotFound = () => {
    return (
        <>
            <section className={styles.pageNotFoundSection}>
                <div className={styles.notFoundContent}>
                    <div className={styles.imageBlock}>
                        <img src="/public/images/sadCloud.png" alt="Page not Found"/>
                    </div>
                    <div className={styles.notFoundText}>
                        <h1>404</h1>
                        <h3>Oops!!! Something went wrong</h3>
                        <p>But it's okay. You can go to</p>
                        <div className={styles.defaultButton}>
                            <a href="/">HOME PAGE</a>
                        </div>
                    </div>


                </div>

            </section>


        </>
    )
}
