import { SignJWT, jwtVerify } from "jose"

const secret = new TextEncoder().encode(
    'cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2',
)

export const generateJWT = async (userId: number) =>
    await new SignJWT({ userId })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setIssuer('codeMalAcademy:auth')
        .setAudience('codeMalAcademy:auth:audience')
        .setExpirationTime('24h')
        .sign(secret);

export const verifiyAccessJWT = async (jwt: string): Promise<{ userId: number }> => {
    const { payload } = await jwtVerify(jwt, secret);
    //@ts-expect-error //! Payload is Defined
    return payload;
}


