package org.clafer.choco.constraint;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Denotes a constraint that is arc-consistent.
 *
 * @author jimmy
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface ArcConsistent {

    /**
     *
     * @return {@code true} if the opposite constraint is also arc-consistent,
     * false otherwise
     */
    boolean opposite() default false;
}
