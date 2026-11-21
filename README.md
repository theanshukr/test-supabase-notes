# Test Supabase Notes App

A demo application to verify **SecondKey** automated IDOR detection and fix workflows.

## Schema
Contains a `notes` table with `user_id`, `title`, and `content`.
Notice that Row Level Security (RLS) is intentionally not enabled in `supabase/migrations/20261122000000_init.sql`, allowing unauthorized users to read confidential notes across accounts.

## SecondKey Automated Fix
When scanned by SecondKey, SecondKey detects the missing RLS policies, evaluates the sensitive data via AI Judge, and automatically opens a Pull Request proposing the remediation SQL migration!
