export default defineComponent({
    props: {
        message: String
    },
    render: (props) => {
        return (
            <div>
                Hello from tsx
                <br />
                props: {props.message}
            </div>
        )
    }
})
