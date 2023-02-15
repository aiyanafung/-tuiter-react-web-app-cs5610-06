import whoArray from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <ul class="list-group">
            <li class="list-group-item fw-bold">Who to follow</li>
            ${
                whoArray.map(who => {
                    return (WhoToFollowListItem(who));
                }).join('')
            }
        </ul>
    `);
}
export default WhoToFollowList;