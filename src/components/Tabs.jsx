export default function Tabs({ children, buttons, ButtonsContainer }) {
    // console.log({buttonContainer})

    // const ButtonsContainer = buttonContainer;

    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}