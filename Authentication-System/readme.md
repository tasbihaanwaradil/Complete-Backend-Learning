
# Quick Revision: Validation, Verification, Authentication & Authorization

## 1. Validation
**Definition:** Checks whether user-entered data is in the correct format and follows the required rules.

**Example:**
- Email: `example@123.com` — syntactically valid email format.
- Password must contain at least 8 characters.
- Age must be a positive number.

**Question:** Is the data correct in format?

## 2. Verification
**Definition:** Checks whether the provided information is genuine or matches the actual source.

**Example:**
- Sending an OTP to an email address to confirm the user can access it.
- Sending a code to a phone number to confirm ownership.

**Question:** Is the information genuine or confirmed?

## 3. Authentication
**Definition:** Checks the identity of a user to confirm who they are.

**Example:**
- Logging in using an email and password.
- Signing in using Google.
- Verifying a user's identity using an OTP.

**Question:** Who are you?

## 4. Authorization
**Definition:** Determines what an authenticated user is allowed to access or do.

**Example:**
- An admin can delete users.
- A regular user can view and edit their own profile.
- A student cannot access the admin dashboard.

**Question:** What are you allowed to do?

---

## Quick Comparison

| Concept | Purpose | Example |
|---|---|---|
| Validation | Check data format and rules | Validate email format |
| Verification | Confirm information or ownership | Verify email using OTP |
| Authentication | Confirm user identity | Login with password |
| Authorization | Check user permissions | Admin-only access |

## Remember
- Validation = Is the input in the correct format?
- Verification = Is the information confirmed?
- Authentication = Who are you?
- Authorization = What can you access?




## Types of Authentication Systems

### 1. Session-Based Authentication
**Definition:** The server creates and stores a session after a user logs in. The client receives a session ID, usually stored in a cookie.

**How it works:**
1. User logs in with email and password.
2. Server verifies credentials and creates a session.
3. Server sends a session ID to the browser.
4. Browser sends the session ID with future requests.
5. Server checks the session to identify the user.

**Example:** Express.js with `express-session`.

**Key point:** Session data is maintained on the server.

### 2. Token-Based Authentication
**Definition:** The server issues a token after successful login. The client sends the token with subsequent requests.

**How it works:**
1. User logs in with email and password.
2. Server verifies credentials and generates a token.
3. Client stores the token.
4. Client sends the token with future requests.
5. Server validates the token and identifies the user.

**Example:** JWT (JSON Web Token).

**Key point:** With self-contained tokens such as JWTs, the server can validate claims without looking up a session for every request. Some token systems still use server-side storage.

---

## Quick Comparison

| Feature | Session-Based | Token-Based |
|---|---|---|
| Identifier | Session ID | Authentication token |
| State | Usually server-side | Can be stateless |
| Client stores | Session ID, usually in a cookie | Token, often in a cookie or memory |
| Server checks | Session record | Token validity |
| Common example | Express Session | JWT |

## Remember
- Session-based: Server maintains the session.
- Token-based: Client sends a token with requests.
