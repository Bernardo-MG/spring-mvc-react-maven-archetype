/**
 * The MIT License (MIT)
 * <p>
 * Copyright (c) ${currentYear} the original author or authors.
 * <p>
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * <p>
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * <p>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

package ${package}.controller;

import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import ${package}.controller.GlobalExceptionHandler;
import ${package}.response.DefaultResponse;
import ${package}.response.Response;
import ${package}.response.ResponseStatus;

/**
 * Captures and handles exceptions for all the controllers.
 * 
 * @author Bernardo Mart&iacute;nez Garrido
 */
@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    /**
     * Logger for the exception handler.
     */
    private static final Logger LOGGER = LoggerFactory
            .getLogger(GlobalExceptionHandler.class);

    /**
     * Default constructor.
     */
    public GlobalExceptionHandler() {
        super();
    }

    @ExceptionHandler({ RuntimeException.class })
    public final ResponseEntity<Object> handleExceptionDefault(
            final Exception ex, final WebRequest request) throws Exception {
        final HttpHeaders headers;
        final HttpStatus status;

        LOGGER.error(ex.getMessage(), ex);

        status = HttpStatus.INTERNAL_SERVER_ERROR;
        headers = new HttpHeaders();
        return handleExceptionInternal(ex, null, headers, status, request);
    }

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(final Exception ex,
            final Object body, final HttpHeaders headers,
            final HttpStatus status, final WebRequest request) {
        final Response<String> response;
        final String message;

        if (ex.getMessage() == null) {
            message = "";
        } else {
            message = ex.getMessage();
        }

        response = new DefaultResponse<>(message, ResponseStatus.FAILURE);

        return super.handleExceptionInternal(ex, response, headers, status,
                request);
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(
            final MethodArgumentNotValidException ex, final HttpHeaders headers,
            final HttpStatus status, final WebRequest request) {
        final Iterable<String> errors;
        final Response<Iterable<String>> response;

        errors = ex.getBindingResult().getFieldErrors().stream()
                .map(x -> x.getDefaultMessage()).collect(Collectors.toList());

        response = new DefaultResponse<>(errors, ResponseStatus.WARNING);

        return super.handleExceptionInternal(ex, response, headers, status,
                request);
    }

}
