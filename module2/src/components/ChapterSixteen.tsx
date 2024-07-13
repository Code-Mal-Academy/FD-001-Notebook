
type Prop = {
    value: string
    onChange: (value: string) => void
}




const ChapterSixteenComponent = ({ value, onChange }: Prop) => {
    return (
        <>
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}

            />



        </>)
}

export default ChapterSixteenComponent