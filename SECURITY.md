# Security Policy

## Supported Versions

Use this section to tell people about which versions of your project are
currently being supported with security updates.

| Version | Supported          |
| ------- | ------------------ |
| 5.1.x   | :white_check_mark: |
| 5.0.x   | :x:                |
| 4.0.x   | :white_check_mark: |
| < 4.0   | :x:                |

## Security Notes

- **Local File System Access**:  
  This package accesses the local file system to perform its core functionality.  
  It **does not transmit file contents to any remote server**.

- **No Network Data Leakage**:  
  The library does not send, share, or upload any local data over the network.

- All file operations happen **only on the user's machine** and are fully controlled by the calling application.

## Disclosure Policy

We encourage responsible disclosure and will reward security researchers with proper credit in our changelog.

## Reporting a Vulnerability

Use this section to tell people how to report a vulnerability.

Tell them where to go, how often they can expect to get an update on a
reported vulnerability, what to expect if the vulnerability is accepted or
declined, etc.
