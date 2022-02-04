
export default function onClick(evt, ref) {
    console.log(evt);
    console.log("data:", ref);
    ref.removeEventListener('click', onClick); // теряется ссылка на ф-цию
    console.log("listener removed");
    return;
}