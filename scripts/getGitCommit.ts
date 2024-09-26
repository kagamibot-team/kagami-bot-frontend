import { execSync } from "child_process";


function getGitCommit(): string {
    try {
        const commitHash = execSync('git rev-parse --short HEAD').toString().trim();
        return commitHash;
    } catch (error) {
        console.error('在获取 Git Commit Hash 时失败了:', error);
        return 'unknown';
    }
}

export default getGitCommit;
