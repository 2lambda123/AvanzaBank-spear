import semver from 'https://cdn.jsdelivr.net/npm/semver@7.3.8/+esm';
export const mintdocsGroupAccessToken = 'glpat-_S9zWjG7xgUzs8fcdsSb';

export function getFormattedDate(date, includeTime = false) {
    let fullMonth = date.getMonth() + 1;
    if (fullMonth < 10) {
        fullMonth = '0' + fullMonth;
    }

    let fullDate = date.getDate();
    if (fullDate < 10) {
        fullDate = '0' + fullDate;
    }

    let formattedDate =  date.getFullYear() + '-' + fullMonth + '-' + fullDate;

    if (includeTime) {
        let fullMinutes = date.getMinutes();
        if (fullMinutes < 10) {
            fullMinutes = '0' + fullMinutes;
        }

        formattedDate = formattedDate +  + ' kl ' + date.getHours() + ':' + fullMinutes
    }

    return formattedDate
}

export function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function getAvatarMarkup(user) {
    return `<a href="${user.web_url}" target="_blank"><img src="${user.avatar_url}" alt="${user.name}"></a>`;
}

export function sortByTimestamp(a, b, order) {
    if (order === 'newest_first') {
        return b.timestamp.getTime() - a.timestamp.getTime();
    } else if (order === 'newest_last') {
        return a.timestamp.getTime() - b.timestamp.getTime();
    } else {
        console.log('unknown sorting order: ', order);
        return 0;
    }
}

export function getComponentNameFromUrl(prefix) {
    const url = new URL(window.location.href);
    const startToken = 'components/';
    const start = url.hash.indexOf(startToken) + startToken.length
    const end = url.hash.indexOf('?');
    if (end === -1) {
        return prefix + '-' + url.hash.substring(start)
    } else {
        return prefix + '-' + url.hash.substring(start, end)
    }
}

function getLikeThumbIcon() {
    return `<svg preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" viewBox="0 0 14 14"><g><g><rect width="14" height="14" style="fill:none"></rect><path d="M13,5.7a2.38,2.38,0,0,0-1.84-.87h-2L9.79,3A1.65,1.65,0,0,0,6.73,1.79L5.42,4.63a.59.59,0,0,0,.29.79.6.6,0,0,0,.8-.29L7.82,2.3a.47.47,0,0,1,.78-.07.47.47,0,0,1,.05.42l-.81,2.6a.61.61,0,0,0,.1.54A.6.6,0,0,0,8.42,6H11.2a1.2,1.2,0,0,1,.92.43,1.23,1.23,0,0,1,.27,1l-.77,3.28a1.21,1.21,0,0,1-1.18,1h-5a.67.67,0,0,1-.66-.57l0,0a.28.28,0,0,0,0-.09V4.93a.6.6,0,0,0-.6-.6H2.57A2.17,2.17,0,0,0,.4,6.5V11a2.17,2.17,0,0,0,3.79,1.44,1.87,1.87,0,0,0,1.22.45h5a2.38,2.38,0,0,0,2.35-1.94l.77-3.27A2.38,2.38,0,0,0,13,5.7ZM3.54,11A1,1,0,1,1,1.6,11V6.5a1,1,0,0,1,1-1h1Z"></path></g></g></svg>`;
}

function getDislikeThumbIcon() {
    return `<svg preserveAspectRatio="xMidYMid meet" focusable="false" width="100%" height="100%" viewBox="0 0 14 14"><g><g><rect width="14" height="14" style="fill:none"></rect><path d="M13.55,6.3,12.8,3.09a2.4,2.4,0,0,0-2.36-2h-5a1.87,1.87,0,0,0-1.22.45A2.17,2.17,0,0,0,.4,3V7.5A2.17,2.17,0,0,0,2.57,9.67H4.14a.6.6,0,0,0,.6-.6V3a.28.28,0,0,0,0-.09l0,0a.68.68,0,0,1,.66-.57h5a1.23,1.23,0,0,1,1.19,1l.75,3.22a1.23,1.23,0,0,1-.26,1A1.2,1.2,0,0,1,11.2,8H8.42a.63.63,0,0,0-.49.24.64.64,0,0,0-.09.54l.82,2.62a.45.45,0,0,1-.84.34L6.51,8.87a.6.6,0,0,0-.8-.29.59.59,0,0,0-.29.79l1.31,2.84A1.66,1.66,0,0,0,9.8,11L9.23,9.17h2A2.41,2.41,0,0,0,13.55,6.3Zm-10,2.17h-1a1,1,0,0,1-1-1V3A1,1,0,0,1,3.55,3Z"></path></g></g></svg>`;
}

function getFormattedDuration(createdAt) {
    const dayDuration = 86400000;

    const time = new Date(createdAt);
    const now = new Date();
    const duration = now.valueOf() - time.valueOf();

    if (time.getDate() === now.getDate()) {
        return 'idag';
    } else {
        const days = duration / dayDuration;

        if (days < 2) {
            return 'igår';
        } else if (days < 31) {
            return Math.round(days) + ' dagar sedan';
        } else {
            const months = Math.round(days/31);
            return months + (months > 1 ? ' månader sedan' : ' månad sedan')
        }
    }

}

export function getIssueRowMarkup(issue) {
    return `<li class="issue-item">
    <div class="issue-title">
        <a href="${issue.web_url}" class="issue-title" target="_blank">
            ${issue.title}
        </a>
        ${issue.merge_requests_count > 0 ? `<span class="badge big bug wip">WIP</span>` : '<span class="badge big bug open">Open</span>'} 
    </div>
    <div class="issue-details">
        <div class="issue-details-left">
            <div class="thumb up">${issue.upvotes}${getLikeThumbIcon()}</div>
            <div class="thumb down">${issue.downvotes}${getDislikeThumbIcon()}</div>
            <div class="text">Rapporterad ${getFormattedDuration(issue.created_at)} av ${issue.author.name}</div>
        </div>
    </div>
</li>`;
}