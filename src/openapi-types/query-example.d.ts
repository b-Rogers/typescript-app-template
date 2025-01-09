/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/repos/TanStack/query": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get repository data */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": {
                            /** @example 123456 */
                            id?: number;
                            /** @example MDEwOlJlcG9zaXRvcnkxMjM0NTY= */
                            node_id?: string;
                            /** @example query */
                            name?: string;
                            /** @example TanStack/query */
                            full_name?: string;
                            /** @example false */
                            private?: boolean;
                            owner?: {
                                /** @example TanStack */
                                login?: string;
                                /** @example 72518640 */
                                id?: number;
                                /** @example MDEyOk9yZ2FuaXphdGlvbjcyNTE4NjQw */
                                node_id?: string;
                                /** @example https://avatars.githubusercontent.com/u/72518640?v=4 */
                                avatar_url?: string;
                                /** @example  */
                                gravatar_id?: string;
                                /** @example https://api.github.com/users/TanStack */
                                url?: string;
                                /** @example https://github.com/TanStack */
                                html_url?: string;
                                /** @example https://api.github.com/users/TanStack/followers */
                                followers_url?: string;
                                /** @example https://api.github.com/users/TanStack/following{/other_user} */
                                following_url?: string;
                                /** @example https://api.github.com/users/TanStack/gists{/gist_id} */
                                gists_url?: string;
                                /** @example https://api.github.com/users/TanStack/starred{/owner}{/repo} */
                                starred_url?: string;
                                /** @example https://api.github.com/users/TanStack/subscriptions */
                                subscriptions_url?: string;
                                /** @example https://api.github.com/users/TanStack/orgs */
                                organizations_url?: string;
                                /** @example https://api.github.com/users/TanStack/repos */
                                repos_url?: string;
                                /** @example https://api.github.com/users/TanStack/events{/privacy} */
                                events_url?: string;
                                /** @example https://api.github.com/users/TanStack/received_events */
                                received_events_url?: string;
                                /** @example Organization */
                                type?: string;
                                /** @example false */
                                site_admin?: boolean;
                            };
                            /** @example https://github.com/TanStack/query */
                            html_url?: string;
                            /** @example A powerful query library */
                            description?: string;
                            /** @example false */
                            fork?: boolean;
                            /** @example https://api.github.com/repos/TanStack/query */
                            url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/forks */
                            forks_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/keys{/key_id} */
                            keys_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/collaborators{/collaborator} */
                            collaborators_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/teams */
                            teams_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/hooks */
                            hooks_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/issues/events{/number} */
                            issue_events_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/events */
                            events_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/assignees{/user} */
                            assignees_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/branches{/branch} */
                            branches_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/tags */
                            tags_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/git/blobs{/sha} */
                            blobs_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/git/tags{/sha} */
                            git_tags_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/git/refs{/sha} */
                            git_refs_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/git/trees{/sha} */
                            trees_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/statuses/{sha} */
                            statuses_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/languages */
                            languages_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/stargazers */
                            stargazers_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/contributors */
                            contributors_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/subscribers */
                            subscribers_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/subscription */
                            subscription_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/commits{/sha} */
                            commits_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/git/commits{/sha} */
                            git_commits_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/comments{/number} */
                            comments_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/issues/comments{/number} */
                            issue_comment_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/contents/{+path} */
                            contents_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/compare/{base}...{head} */
                            compare_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/merges */
                            merges_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/{archive_format}{/ref} */
                            archive_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/downloads */
                            downloads_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/issues{/number} */
                            issues_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/pulls{/number} */
                            pulls_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/milestones{/number} */
                            milestones_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/notifications{?since,all,participating} */
                            notifications_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/labels{/name} */
                            labels_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/releases{/id} */
                            releases_url?: string;
                            /** @example https://api.github.com/repos/TanStack/query/deployments */
                            deployments_url?: string;
                            /**
                             * Format: date-time
                             * @example 2021-01-01T00:00:00Z
                             */
                            created_at?: string;
                            /**
                             * Format: date-time
                             * @example 2021-01-01T00:00:00Z
                             */
                            updated_at?: string;
                            /**
                             * Format: date-time
                             * @example 2021-01-01T00:00:00Z
                             */
                            pushed_at?: string;
                            /** @example git://github.com/TanStack/query.git */
                            git_url?: string;
                            /** @example git@github.com:TanStack/query.git */
                            ssh_url?: string;
                            /** @example https://github.com/TanStack/query.git */
                            clone_url?: string;
                            /** @example https://github.com/TanStack/query */
                            svn_url?: string;
                            /** @example https://tanstack.com/query */
                            homepage?: string;
                            /** @example 12345 */
                            size?: number;
                            /** @example 43262 */
                            stargazers_count?: number;
                            /** @example 43262 */
                            watchers_count?: number;
                            /** @example TypeScript */
                            language?: string;
                            /** @example true */
                            has_issues?: boolean;
                            /** @example true */
                            has_projects?: boolean;
                            /** @example true */
                            has_downloads?: boolean;
                            /** @example true */
                            has_wiki?: boolean;
                            /** @example true */
                            has_pages?: boolean;
                            /** @example true */
                            has_discussions?: boolean;
                            /** @example 2977 */
                            forks_count?: number;
                            /** @example null */
                            mirror_url?: string | null;
                            /** @example false */
                            archived?: boolean;
                            /** @example false */
                            disabled?: boolean;
                            /** @example 90 */
                            open_issues_count?: number;
                            license?: {
                                /** @example mit */
                                key?: string;
                                /** @example MIT License */
                                name?: string;
                                /** @example MIT */
                                spdx_id?: string;
                                /** @example https://api.github.com/licenses/mit */
                                url?: string | null;
                                /** @example MDc6TGljZW5zZW1pdA== */
                                node_id?: string;
                            } | null;
                            /** @example true */
                            allow_forking?: boolean;
                            /** @example false */
                            is_template?: boolean;
                            /** @example false */
                            web_commit_signoff_required?: boolean;
                            /** @example [
                             *       "react",
                             *       "typescript",
                             *       "query"
                             *     ] */
                            topics?: string[];
                            /** @example public */
                            visibility?: string;
                            /** @example 2977 */
                            forks?: number;
                            /** @example 90 */
                            open_issues?: number;
                            /** @example 43262 */
                            watchers?: number;
                            /** @example main */
                            default_branch?: string;
                            /** @example null */
                            temp_clone_token?: string | null;
                            /** @example 2977 */
                            network_count?: number;
                            /** @example 204 */
                            subscribers_count?: number;
                        };
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
