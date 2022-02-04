
export default function onClick(evt, ref) {
    console.log(evt);
    console.log("data:", ref);
    ref.removeEventListener('click', onClick);
    console.log("listener removed");
    return;
}