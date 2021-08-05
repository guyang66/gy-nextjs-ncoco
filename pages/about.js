function About({guyang}) {
    return <div>About关于我们{guyang}</div>
}

export async function getStaticProps() {
    return {
        props:{
            guyang:'故意'
        }
    }
}

export default About