/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> =
    T extends ColumnType<infer S, infer I, infer U>
        ? ColumnType<S, I | undefined, U>
        : ColumnType<T, T | undefined, T>;

export type Int8 = ColumnType<
    string,
    bigint | number | string,
    bigint | number | string
>;

export type Numeric = ColumnType<string, number | string, number | string>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface AuthGroup {
    id: Generated<number>;
    name: string;
}

export interface AuthGroupPermissions {
    group_id: number;
    id: Generated<number>;
    permission_id: number;
}

export interface AuthPermission {
    codename: string;
    content_type_id: number;
    id: Generated<number>;
    name: string;
}

export interface AuthUser {
    date_joined: Timestamp;
    email: string;
    first_name: string;
    id: Generated<number>;
    is_active: boolean;
    is_staff: boolean;
    is_superuser: boolean;
    last_login: Timestamp | null;
    last_name: string;
    password: string;
    username: string;
}

export interface AuthUserGroups {
    group_id: number;
    id: Generated<number>;
    user_id: number;
}

export interface AuthUserUserPermissions {
    id: Generated<number>;
    permission_id: number;
    user_id: number;
}

export interface BackgroundTask {
    attempts: number;
    creator_content_type_id: number | null;
    creator_object_id: number | null;
    failed_at: Timestamp | null;
    id: Generated<number>;
    last_error: string;
    locked_at: Timestamp | null;
    locked_by: string | null;
    priority: number;
    queue: string | null;
    repeat: Int8;
    repeat_until: Timestamp | null;
    run_at: Timestamp;
    task_hash: string;
    task_name: string;
    task_params: string;
    verbose_name: string | null;
}

export interface BackgroundTaskCompletedtask {
    attempts: number;
    creator_content_type_id: number | null;
    creator_object_id: number | null;
    failed_at: Timestamp | null;
    id: Generated<number>;
    last_error: string;
    locked_at: Timestamp | null;
    locked_by: string | null;
    priority: number;
    queue: string | null;
    repeat: Int8;
    repeat_until: Timestamp | null;
    run_at: Timestamp;
    task_hash: string;
    task_name: string;
    task_params: string;
    verbose_name: string | null;
}

export interface DjangoAdminLog {
    action_flag: number;
    action_time: Timestamp;
    change_message: string;
    content_type_id: number | null;
    id: Generated<number>;
    object_id: string | null;
    object_repr: string;
    user_id: number;
}

export interface DjangoContentType {
    app_label: string;
    id: Generated<number>;
    model: string;
}

export interface DjangoMigrations {
    app: string;
    applied: Timestamp;
    id: Generated<number>;
    name: string;
}

export interface DjangoSession {
    expire_date: Timestamp;
    session_data: string;
    session_key: string;
}

export interface MarketplaceAccount {
    contact: string;
    email: string;
    email_activity: boolean;
    email_unread_notification: boolean;
    id: Generated<number>;
    name: string;
    remind_set_email_settings: boolean;
    username: string;
}

export interface MarketplaceAccountContacts {
    from_account_id: number;
    id: Generated<number>;
    to_account_id: number;
}

export interface MarketplaceAlbumimage {
    id: Generated<number>;
    image: string;
    item_id: number;
}

export interface MarketplaceCategory {
    description: string;
    id: Generated<number>;
    name: string;
}

export interface MarketplaceItem {
    condition: Numeric;
    deadline: Timestamp;
    description: string;
    id: Generated<number>;
    image: string;
    name: string;
    negotiable: boolean;
    posted_date: Timestamp;
    price: Numeric;
    seller_id: number;
    status: Numeric;
}

export interface MarketplaceItemCategories {
    category_id: number;
    id: Generated<number>;
    item_id: number;
}

export interface MarketplaceItemflag {
    id: Generated<number>;
    item_id: number;
    reporter_id: number | null;
    text: string;
}

export interface MarketplaceItemlog {
    account_id: number;
    datetime: Timestamp;
    id: Generated<number>;
    item_id: number;
    log: string;
}

export interface MarketplaceItemrequest {
    condition: Numeric;
    deadline: Timestamp;
    description: string;
    id: Generated<number>;
    image: string;
    name: string;
    negotiable: boolean;
    posted_date: Timestamp;
    price: Numeric;
    requester_id: number;
}

export interface MarketplaceItemrequestCategories {
    category_id: number;
    id: Generated<number>;
    itemrequest_id: number;
}

export interface MarketplaceItemrequestflag {
    id: Generated<number>;
    item_request_id: number;
    reporter_id: number | null;
    text: string;
}

export interface MarketplaceItemrequestlog {
    account_id: number;
    datetime: Timestamp;
    id: Generated<number>;
    item_request_id: number;
    log: string;
}

export interface MarketplaceMessage {
    datetime: Timestamp;
    id: Generated<number>;
    receiver_id: number;
    sender_id: number;
    text: string;
}

export interface MarketplaceNotification {
    account_id: number;
    datetime: Timestamp;
    id: Generated<number>;
    seen: boolean;
    text: string;
    url: string;
}

export interface MarketplaceTransaction {
    buyer_id: number;
    id: Generated<number>;
    item_id: number;
    status: Numeric;
}

export interface MarketplaceTransactionlog {
    account_id: number;
    datetime: Timestamp;
    id: Generated<number>;
    log: string;
    transaction_id: number;
}

export interface PgStatStatements {
    blk_read_time: number | null;
    blk_write_time: number | null;
    calls: Int8 | null;
    dbid: number | null;
    local_blks_dirtied: Int8 | null;
    local_blks_hit: Int8 | null;
    local_blks_read: Int8 | null;
    local_blks_written: Int8 | null;
    max_exec_time: number | null;
    max_plan_time: number | null;
    mean_exec_time: number | null;
    mean_plan_time: number | null;
    min_exec_time: number | null;
    min_plan_time: number | null;
    plans: Int8 | null;
    query: string | null;
    queryid: Int8 | null;
    rows: Int8 | null;
    shared_blks_dirtied: Int8 | null;
    shared_blks_hit: Int8 | null;
    shared_blks_read: Int8 | null;
    shared_blks_written: Int8 | null;
    stddev_exec_time: number | null;
    stddev_plan_time: number | null;
    temp_blks_read: Int8 | null;
    temp_blks_written: Int8 | null;
    total_exec_time: number | null;
    total_plan_time: number | null;
    userid: number | null;
    wal_bytes: Numeric | null;
    wal_fpi: Int8 | null;
    wal_records: Int8 | null;
}

export interface Tokens {
    cache_key: string;
    expires: Timestamp;
    value: string;
}

export interface VarsityItem {
    description: string | null;
    id: Generated<Int8>;
    image: string;
    item_name: string;
    price: Numeric;
    type: Numeric;
    wine_type: Numeric | null;
    year: number | null;
}

export interface DB {
    auth_group: AuthGroup;
    auth_group_permissions: AuthGroupPermissions;
    auth_permission: AuthPermission;
    auth_user: AuthUser;
    auth_user_groups: AuthUserGroups;
    auth_user_user_permissions: AuthUserUserPermissions;
    background_task: BackgroundTask;
    background_task_completedtask: BackgroundTaskCompletedtask;
    django_admin_log: DjangoAdminLog;
    django_content_type: DjangoContentType;
    django_migrations: DjangoMigrations;
    django_session: DjangoSession;
    marketplace_account: MarketplaceAccount;
    marketplace_account_contacts: MarketplaceAccountContacts;
    marketplace_albumimage: MarketplaceAlbumimage;
    marketplace_category: MarketplaceCategory;
    marketplace_item: MarketplaceItem;
    marketplace_item_categories: MarketplaceItemCategories;
    marketplace_itemflag: MarketplaceItemflag;
    marketplace_itemlog: MarketplaceItemlog;
    marketplace_itemrequest: MarketplaceItemrequest;
    marketplace_itemrequest_categories: MarketplaceItemrequestCategories;
    marketplace_itemrequestflag: MarketplaceItemrequestflag;
    marketplace_itemrequestlog: MarketplaceItemrequestlog;
    marketplace_message: MarketplaceMessage;
    marketplace_notification: MarketplaceNotification;
    marketplace_transaction: MarketplaceTransaction;
    marketplace_transactionlog: MarketplaceTransactionlog;
    pg_stat_statements: PgStatStatements;
    tokens: Tokens;
    varsity_item: VarsityItem;
}
