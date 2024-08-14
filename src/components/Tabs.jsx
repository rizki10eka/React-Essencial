export default function Tabs({ children, buttons, ButtonsContainer='menu' }) {
    // console.log({buttonContainer})

    // const ButtonsContainer = buttonContainer;

    return <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
}