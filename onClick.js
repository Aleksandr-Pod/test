
export default function onClick(evt, ref, closeFunction) {
    console.log(evt);
    console.log("data:", ref);
    ref.removeEventListener('click', closeFunction); // не теряется ссылка на ф-цию
    console.log("listener removed");
    return;
}