# Notarization Action

This action submits an application to Apple's notary service for notarization.

## Inputs

### `primary-bundle-id`

**Required** Primary bundle identifier for the application.

### `username`

**Required** Username for your Apple Developer account.

### `password`

**Required** Password for your Apple Developer account. Default `"@keychain:AC_PASSWORD"`.

### `asc-provider`

Used when a user account is associated with multiple providers.

### `file`

**Required** Path to the file that you want to process.

## Outputs

### `response`

The XML output from Xcode's altool command.

## Example usage

```yaml
uses: actions/notarization-action@v1
with:
  primary-bundle-id: 'com.mycompany.MyApp'
  username: 'pcoulson@shield.gov'
  password: '@keychain:AC_PASSWORD'
  file: '/tmp/MyApp.zip'
```