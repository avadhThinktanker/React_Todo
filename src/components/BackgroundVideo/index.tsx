const BackgroundVideo = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video className="absolute top-0 left-0 w-full h-full object-cover z-10" autoPlay loop muted>
                <source
                    src="https://s3-figma-videos-production-sig.figma.com/video/1366787910253464473/TEAM/389d/803d/-bd3d-4adf-aa77-1bbb5d492c3c?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FhMkMzpPwGXXmtx2wcQk9PzAYKhHas2wnJjtcfe3A30vS5FXFsUs8dE2VRrAzd1EbBBHN0Jx16WbYaQApRc-6otPe6BzNdV3ueHQqzYMt9l-PLYpejBuJlb6NCIKwdXwPehzlkmWqARX52KMzsF2YdL-Qr8G13v0GbLrV7Il~4QxWOBubZQcHbtj42lXPYzzkyLWzn-dfJxO1CWqQN~VVRZ-557N4KI0T8Btkr9HO8VPI7z6AMRLwyD1d-h9WnzAUSny4LeibOEN7A5T1krQbfxM8meJSdMRpeGm-Ii78jCZln9SFSzoKOeJ5BRvPMmX6K4rlkauL4RYYvwHxea8OQ__"
                    type="video/mp4"
                />
            </video>
            <div className="absolute w-full h-full top-0 left-0 bg-gray-900 opacity-40 z-20"></div>
        </div>
    );
};

export default BackgroundVideo;
